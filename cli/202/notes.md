# CLI 202

## Customize the command prompt in zsh with the parent directory in green and a timestamp

Add this code to **.zshrc**

```

#-------------------------------------------------

# CUSTOMIZE THE COMMAND PROMPT
# `PROMP` places characters at the left-hand side of the terminal
#`% [...]` non-printable characters must be wrapped like this in order for the line wrapping to work as expected`
# `% F{...} sets a forground (i.e text) color`
# `%1~- shows the current directory only(~ removes everything above the current directory)`
#`%%` shows the prompts as `%` ( it appears that each new command must be preceeded by `%`)
# `PROMPT` places characters at the right hand-side of the terminal
# `%F{235}` is a foreground color (i.e. text) of light gray
#''%D(%k:%M:%S}' renders a timestamp in 24-hr format'
#----------------------------------------------------------------------------------------------------------------------------------------PROMPROMPT='%{%F{green}%}%1~ %{%F{none}%}%% '
RPROMPT='%{%F(235}%}%D{%K:%M:%S}'
~           

```

