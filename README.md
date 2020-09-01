# CraftProducts

## Tools for product teams to craft innovative products

CraftProducts provides online tools for product teams to clearly understand customer needs, map user experience journeys, communicate consistent vision across the board and conceptualize & design better products collaboratively.



## How does it work?

CraftProducts is a simple online editor that interprets CraftProduct schema (explained below) compliant YAML templates and render the layout in a structured way. 

![Landing page](/images/landing_page.png)

All the registered templates can be found in [template/index.yaml](/template/index.yaml)

Based on the schema, CraftProduct online editor to render very diverse forms.e.g.

| Product vision board | Customer journey maps |
| --- | --- |
| ![Product vision board](/images/product_vision_board.png) | ![Customer journey map](/images/journey_map.png) |


## Create your own template

Below section is a detailed reference guide to CraftProducts YAML templates. It includes a catalog of all supported YAML capabilities and the available options.

Template structure
A template is one or more containers that describe the layout structure. Each container can contain one or more containers, panels and matrix.

This hierarchy is reflected in the structure of a YAML file like:

* container
  * panel
  * panel
  * container
    * panel
    * matrix

## Template
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| code | string | null | unique identifier for the template in the given template library |
| title | string | null | Name as visible on the tools list |
| summary | string | null | Brief summary of template as visible on the tools list |
| orientation | vertical/horizontal | vertical | Indicates orientation of the first set of child elements |
| layout | freeflow/slit | null | CraftProducts supports 2 types of layouts. Split layout provides resizable panels while freeflow expands beyond given viewport|
| children | array | vertical | list of child elements (container/panel/matrix) that make up this template |
