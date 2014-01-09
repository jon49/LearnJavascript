namespace FStoJS_Static

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
type private Math = System.Math

[<JavaScript>]
module Client =

    let msg messages = messages |> String.concat " - "
    let alert message = JavaScript.Alert(message)

    let Main () =
        let label = Div [Text ""]

        Div [
            label
            Button [Text "Start Javascript."]    
            |>! OnClick (fun _ _ ->
                let text m = label.Text <- m
                label.Text <- "You entered: "
                text (string (Math.Min(1, 2)))
                Math.Max(2, 3) |> string |> alert 
                )
        ]
