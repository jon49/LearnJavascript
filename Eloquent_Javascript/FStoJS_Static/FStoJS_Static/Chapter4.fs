namespace EJ

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open Utilities

module Chapter4 =

    let Main () =

        let label = Div [Text ""]

        Div [
            label
            Button [Text "Start"] 
            |>! OnClick (fun _ _ ->
                let catNames = Set.ofArray [|"Jolly"; "Good"; "Cat"; "Name" |]
                let catNames = catNames.Add("Jimmy Jones")
                let catNames = catNames.Remove("Jolly")
                let isCatName = catNames.Contains("George")
                label.Text <- ((String.concat ", " catNames) + " Goerge is a cat: " + (string isCatName))
                )
        ]

