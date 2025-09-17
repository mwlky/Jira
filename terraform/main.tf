resource "azurerm_resource_group" "rg" {
  name     = var.rg_name
  location = var.location
}

# TODO
# implement IaC after reactivate Azure subscription