
#' @title React Select
#'
#' @description A flexible and beautiful Select Input control.
#'
#' @param inputId The \code{input} slot that will be used to access the value.
#' @param label Display label for the control, or NULL for no label.
#' @param choices List of values to select from.
#' @param selected The initially selected value.
#' @param placeholder The text displayed when no option is selected.
#' @param multi Allow the user to select multiple values.
#' @param searchable Allow the user to search for matching options
#' @param clearable Add a button to remove selected choice(s).
#' @param width The width of the input, e.g. \code{'400px'}, or \code{'100\%'}.
#'
#' @importFrom shiny restoreInput
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags tagList validateCssUnit
#'
#' @export
#'
#' @examples
#' if (interactive()) {
#'
#'   library(shiny)
#'   library(shinyReactWidgets)
#'
#'   ui <- fluidPage(
#'     tags$h1("react-select example"),
#'
#'     select_input(
#'       inputId = "select",
#'       choices = month.name,
#'       multi = FALSE
#'     ),
#'
#'     verbatimTextOutput("res")
#'   )
#'
#'   server <- function(input, output, session) {
#'
#'     output$res <- renderPrint({
#'       input$select
#'     })
#'
#'   }
#'
#'   shinyApp(ui, server)
#' }
select_input <- function(inputId, label, choices, selected = NULL,
                         placeholder = "Select...", multi = FALSE,
                         searchable = FALSE, clearable = TRUE,
                         width = NULL) {
  selected <- restoreInput(id = inputId, default = selected)
  if (is.null(selected))
    selected <- character(0)
  choices <- choicesWithNames(choices)
  choices <- lapply(
    X = seq_along(choices),
    FUN = function(i) {
      list(label = names(choices)[i], value = choices[[i]])
    }
  )
  createReactShinyInput(
    inputId = inputId,
    class = "select_input",
    dependencies = htmlDependency(
      name = "select_input",
      version = "1.0.0",
      src = "www/shinyReactWidgets/select_input",
      package = "shinyReactWidgets",
      script = "select_input.js"
    ),
    default = selected,
    configuration = dropNulls(list(
      inputId = inputId,
      label = label,
      choices = choices,
      selected = selectedChoices(choices, selected),
      placeholder = placeholder,
      isClearable = isTRUE(clearable),
      isSearchable = isTRUE(searchable),
      isMulti = isTRUE(multi)
    )),
    container = tags$div
  )
}


