library(shiny)
library(shinyReactWidgets)

ui <- fluidPage(
  tags$h1("react-select example"),

  select_input(
    inputId = "select",
    label = "Select a month:",
    choices = month.name,
    multi = FALSE
  ),

  verbatimTextOutput("res")
)

server <- function(input, output, session) {

  output$res <- renderPrint({
    input$select
  })

}

shinyApp(ui, server)
