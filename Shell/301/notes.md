# Shell 301
## Execute custom commands defined in shell script 

### coverting a shell script to be a custom CLI command 
- Define the script 
- Save the file with `.sh` extension 
- Run the script to make it works --> `sh <someFile>.sh 
- Change its permissions to be excutable with `chmode 755 <someFile>.sh`
- Remove the `.sh` extension
- Place the executable in a **~/.bin** (home) directory (create this directory if it does not exist already)
- Add **/.bin** to the PATH 
- Restart or reset the CLI 
- Run the command from the CLI using the filename as the command itself