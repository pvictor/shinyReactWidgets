library(shiny)
library(htmltools)
library(reactR)
library(shinyReactWidgets)

ui <- fluidPage(
  titlePanel("reactR Input Example"),

  select_input(
    inputId = "select",
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
