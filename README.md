# My Notes app for CMPT 372 Assignment 1 😊

## Local Setup

1. Clone the repository
2. Install dependencies by running `npm install`
3. Start the development server with `npm run dev`

## Build and Deploy

1. Create a production build locally by running `npm run build`. This generates a `dist` folder
2. SSH into your GCP VM instance
3. Ensure Nginx and Node.js are installed on the VM:

   ```bash
   sudo apt update && sudo apt install -y nginx
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt install -y nodejs
   ```

4. Copy the contents of the `dist` folder to the VM, or optionally build directly on the VM by pulling the repository and running `npm ci && npm run build`
5. Move the build files to the Nginx serving directory:

   ```bash
   sudo cp -r dist/* /var/www/html/
   ```

6. Restart Nginx to serve the newly deployed site:

   ```bash
   sudo systemctl restart nginx
   ```

## Design Decisions

- React was used since I wanted practice after not using it for a year or so, and I would assume it would be used for the group project
- A modal seemed better since it would be more intuitive and UX friendly than a new page/panel

## AI Usage

AI was used to help with the following:

- Helping style some parts of the app
- Debugging some smaller issues (etc. two column layout) and looking up syntax errors
