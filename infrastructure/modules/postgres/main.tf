terraform {
  required_providers {
    postgresql = {
      source  = "cyrilgdn/postgresql"
      version = "1.21.0"
    }
  }
}

provider "postgresql" {
  host     = "localhost"
  port     = 5432
  username = "postgres"
  password = "admin"
  database = "contests"
  sslmode  = "disable"
}

# resource "postgresql_database" "contests" {
#   name  = "contests"
#   owner = "postgres"
# }



resource "postgresql_function" "increment" {
  name = "increment"
  arg {
    name = "i"
    type = "integer"
  }
  returns  = "integer"
  language = "plpgsql"
  body     = <<-EOF
        BEGIN
            RETURN i + 2;
        END;
    EOF
}
