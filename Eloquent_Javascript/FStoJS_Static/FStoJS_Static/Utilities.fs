module Utilities

open IntelliFactory.WebSharper.Core.Attributes

/// Displays an input box
[<Inline "prompt($question, $defaultResponse)">]
let Prompt (question: string) (defaultResponse: string) = null : string 