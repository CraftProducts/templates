# Tools for product teams to craft innovative products

CraftProducts provides online tools for product teams to clearly understand customer needs, map user experience journeys, communicate consistent vision across the board and conceptualize & design better products collaboratively.


## How does it work?

CraftProducts is a simple online editor that interprets CraftProduct schema (explained below) compliant YAML templates and render the layout in a structured way. 

![Landing page](/images/landing_page.png)

All the registered templates can be found in [index.yaml](/template/index.yaml)

Based on the schema definitions, CraftProduct online editor to render very diverse forms.e.g.


# Create your own template

Easiest way to create your own template is to simply download an existing template yaml file and modify it as per the needs.

## Template schema
Below section is a detailed reference guide to CraftProducts YAML templates. It includes a catalog of all supported YAML capabilities and the available options.

A CraftProduct template is simply a collection of one or more containers that describe the layout structure. 

## Understanding building blocks

### Containers
As the name suggests, containers are placeholder component who's primary function is to define orientation of the child elements. Every container should have one or more child elements of the following types:
* container
* panel
* matrix

### Panels
Panels are the primary building blocks that are responsible for rendering individual sections of the template that enable end users to edit and view section specific information. 

See below with sample usage in the context of [Customer journey map](/template/cxjourneymaps.yaml). You can refer the above screenshot for reference.

#### Supported datatypes
Currently the system supports following types:
| Datatype | Description | Sample usage |
| --- | --- | --- |
| text | represents multiline text block useful for capturing text information | Journeymap scenario |
| list | represents a list of items | User expectations |
| select | represents a multiple choice value useful for showing options for user to choose from | User emotions (Happy/Neutral/Sad) |
| image | represents a image viewer | Representative user persona photo |

### Matrix
Matrix represents 2 dimentional data representation. Defining a matrix, primarily consists of 2 properties. 

See below with sample usage in the context of [Customer journey map](/template/cxjourneymaps.yaml). You can refer the above screenshot for reference.

| Property | Description | Sample usage |
| --- | --- | --- |
| Columns | useful to present a workflow or process stages | Discover > Try > Buy > Use |
| Rows | useful for capturing entity specific properties at every stage | Action / Mindset / Emotions|

Now that you understand the primary build blocks of any template, lets get into defining a standard template

## Template

An individual template represents an independent tool for the product team. 

System supports templates with primiarily 2 types of layouts

| Layout | Description | Sample template |
| --- | --- | --- | 
| freeflow | sections expand as per the content. | ![Customer journey map](/images/journey_map.png) |
| split window | templates of this layout type is restricted to the screen height and width and occupy full screen. User has an option to slide individual sections horizontally and vertically | ![Product vision board](/images/product_vision_board.png) |


## Understanding template structure
This hierarchy is reflected in the structure of a YAML file like:

* header
* children
  * container
    * panel
    * panel
  * panel
  * children
    * panel
    * matrix

### Header

Header consists of following properties
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| code | string | null | unique identifier for the template in the given template library |
| title | string | null | Name as visible on the tools list |
| summary | string | null | Brief summary of template as visible on the tools list |
| thumbnail | string | null | representative image displayed on the templates listing page |
| orientation | vertical`|`horizontal | vertical | Indicates orientation of the first set of child elements |
| layout | freeflow`|`slit | null | CraftProducts supports 2 types of layouts. Split layout provides resizable panels while freeflow expands beyond given viewport|
| children | array | null | list of child elements (container/panel/matrix) that make up this template |

### Children
Children consists of following properties
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | panel`|`container`|`matrix | panel | type of building block |
| orientation | vertical`|`horizontal | vertical | applicable only for **container** type |
| children | array | null | applicable only for **container** type |
| size | number (1-100) | 100 |  applicable only for child elements of a **container**. _Note: sum total of all the elements in the container should be 100_  |
| code | string | null | unique identifier for the template in the given template library |
| title | string | null | Name as visible on the tools list |
| summary | string | null | Brief summary of template as visible on the tools list |
| datatype | text`|`list`|`select`|`image | null | applicable only for **panel** type. _See [supported datatypes](#supported_datatypes) section above_ |
| columns | array | null | applicable only for **matrix** type. _See [matrix](#matrix) section above_ |
| rows | array | null | applicable only for **matrix** type. _See [matrix](#matrix) section above_ |
| properties | object | null | This represents datatype specific extended metadata |
| options | array | null | applicable only for **select** datatype. |


### Datatype specific properties
| Datatype | Property | Possible values | Description |
| --- | --- | --- | --- |
| matrix | column.title | string | Title of the stage in the workflow |   
| | column.summary | string | Short summary of the stage - displayed on hover of the title |
| | row.title | string | Title of the row |   
| | column.title | string | Short summary of the row - displayed on hover of the title |
| |
| list | view | list`|`title | indicates how should the list items be rendered |
| |
| image | height | number | max-height of the image |
| | width | number | max-width of the image |
| | mode | link`|`embed | Indicates if the image should be a web-url or an uploaded file |


