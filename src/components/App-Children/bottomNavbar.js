//
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Search } from "./search";

import {
  Typography,
  TextField,
  Container,
  Grid,
  Link,
} from "@material-ui/core";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      style={{ textAlign: "center" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Name of Organization or Link of Official Site
      </Link>
      {"  @"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

function BottomNavbar() {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 bottom-navbar-content">
              <Search />
            </div>

            <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 bottom-navbar-content">
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ textAlign: "center" }}
              >
                <a href="mailto:clinto92@gmail.com">
                  Email us on : onlineschool@gmail.com
                </a>
              </Typography>
              <Copyright />

              <Typography
                variant="body2"
                color="textSecondary"
                style={{ textAlign: "center" }}
              >
                Created By Top Of Cliff Developers
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default BottomNavbar;

//

// function Copyright() {
//   return (
//     <React.Fragment>
//       {"© "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//     </React.Fragment>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     backgroundColor: theme.palette.secondary.light,
//   },
//   container: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(8),
//     display: "flex",
//   },
//   iconsWrapper: {
//     height: 120,
//   },
//   icons: {
//     display: "flex",
//   },
//   icon: {
//     width: 48,
//     height: 48,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: theme.palette.warning.main,
//     marginRight: theme.spacing(1),
//     "&:hover": {
//       backgroundColor: theme.palette.warning.dark,
//     },
//   },
//   list: {
//     margin: 0,
//     listStyle: "none",
//     padding: 0,
//   },
//   listItem: {
//     paddingTop: theme.spacing(0.5),
//     paddingBottom: theme.spacing(0.5),
//   },
//   language: {
//     marginTop: theme.spacing(1),
//     width: 150,
//   },
//   footer: {
//     padding: theme.spacing(3, 2),
//     marginTop: "auto",
//     backgroundColor:
//       theme.palette.type === "light"
//         ? theme.palette.grey[200]
//         : theme.palette.grey[800],
//   },
// }));

// const LANGUAGES = [
//   {
//     code: "en-US",
//     name: "English",
//   },
//   {
//     code: "fr-FR",
//     name: "Français",
//   },
// ];

// export default function BottomNavbar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.footer}>
//     <Typography component="footer" className={classes.root}>
//       <Container className={classes.container}>
//         <Grid container spacing={5}>
//           <Grid item xs={6} sm={4} md={3}>
//             <Grid
//               container
//               direction="column"
//               justify="flex-end"
//               className={classes.iconsWrapper}
//               spacing={2}
//             >
//               <Grid item className={classes.icons}>
//                 <a href="https://material-ui.com/" className={classes.icon}>
//                   <img
//                     src="/static/themes/onepirate/appFooterFacebook.png"
//                     alt="Facebook"
//                   />
//                 </a>
//                 <a
//                   href="https://twitter.com/MaterialUI"
//                   className={classes.icon}
//                 >
//                   <img
//                     src="/static/themes/onepirate/appFooterTwitter.png"
//                     alt="Twitter"
//                   />
//                 </a>
//               </Grid>
//               <Grid item>
//                 <Copyright />
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid item xs={6} sm={4} md={2}>
//             <Typography variant="h6" marked="left" gutterBottom>
//               Legal
//             </Typography>
//             <ul className={classes.list}>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/terms/">Terms</Link>
//               </li>
//               <li className={classes.listItem}>
//                 <Link href="/premium-themes/onepirate/privacy/">Privacy</Link>
//               </li>
//             </ul>
//           </Grid>
//           <Grid item xs={6} sm={8} md={4}>
//             <Typography variant="h6" marked="left" gutterBottom>
//               Language
//             </Typography>
//             <TextField
//               select
//               SelectProps={{
//                 native: true,
//               }}
//               className={classes.language}
//             >
//               {LANGUAGES.map((language) => (
//                 <option value={language.code} key={language.code}>
//                   {language.name}
//                 </option>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item>
//             <Typography variant="caption">
//               {"Icons made by "}
//               <Link
//                 href="https://www.freepik.com"
//                 rel="sponsored"
//                 title="Freepik"
//               >
//                 Freepik
//               </Link>
//               {" from "}
//               <Link
//                 href="https://www.flaticon.com"
//                 rel="sponsored"
//                 title="Flaticon"
//               >
//                 www.flaticon.com
//               </Link>
//               {" is licensed by "}
//               <Link
//                 href="https://creativecommons.org/licenses/by/3.0/"
//                 title="Creative Commons BY 3.0"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 CC 3.0 BY
//               </Link>
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Typography>
//     </div>
//   );
// }
