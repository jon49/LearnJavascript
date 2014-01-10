namespace FStoJS_Static

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open Utilities
type private Math = System.Math

[<JavaScript>]
module Client =

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
                let confirm = JavaScript.Confirm("Shall we, then?")
                //let prompted = prompt "Tell us everything you know!" //See also ExtJS for prompt.
                let theNumber = 5.
                let squaredNumber = theNumber**2.
                text (string squaredNumber)
                [|0.. 2 ..12|] |> Array.map(fun x -> string x) |> String.concat "\n" |> text
                //Ex 2.2
                (2.**10.) |> string |> text
                //Ex. 2.3
                [1..10] |> List.map (fun x -> (String.replicate x "#") + "\n") |> String.concat "" |> text
                //Ex. 2.4
                let answer = int (Prompt "What is the value of 2 + 2?" "") 
                match answer with
                | 4 -> "Yippee!" |> text
                | 3 | 5 -> text "Almost!"
                | _ -> text "Not even close!"
                //Ex. 2.6
                let isCorrect answer =
                    match answer with
                    | 4 -> 
                        text "Yippee!"
                        true
                    | 3 | 5 ->
                        text "Almost!"
                        false
                    | _ ->
                        text "Not even close!"
                        false
                let rec getCorrectAnswer () =
                    let result = int (Prompt "2.6: What is the value of 2 + 2?" "")
                    if not (isCorrect result) then getCorrectAnswer ()
                getCorrectAnswer ()
                )
        ] 
