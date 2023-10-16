from app.schemas.token import Token
from fastapi import Depends, FastAPI, HTTPException, status
from datetime import timedelta
from fastapi.security import  OAuth2PasswordRequestForm
from app.auth.user import authenticate_user
from app.models.users import get_fake_user_from_db
from app.auth.token import create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES
from app.auth.user import get_current_active_user
from app.schemas.user import User
from typing_extensions import Annotated



app = FastAPI()


@app.post("/token", response_model=Token)
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()]
):
    user = authenticate_user(get_fake_user_from_db(), form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/users/me/", response_model=User)
async def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    return current_user


@app.get("/users/me/items/")
async def read_own_items(
    current_user: Annotated[User, Depends(get_current_active_user)]
):
    return [{"item_id": "Foo", "owner": current_user.username}]