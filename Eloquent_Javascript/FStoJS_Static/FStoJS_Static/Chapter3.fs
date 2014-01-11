namespace EJ

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open Utilities

[<JavaScript>]
module Chapter3 =

    let Main () =

        let label = Div [Text ""]

        Div [
            label
            Button [Text "Start"]
            |>! OnClick (fun _ _ ->
                let greaterThan (testNumber:int) (number:int) = number > testNumber
            
                let greaterThan5 = greaterThan 5
            
                label.Text <- ("6 is greater than 5: " + (string (greaterThan5 6))
                          + " - 4 is greater than 5: " + (string (greaterThan5 4))
                          + " - 5 is greater than 5: " + (string (greaterThan5 5))
                          )
                )
    
        ]
    