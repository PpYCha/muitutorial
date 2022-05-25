import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/280282158_4875221522589835_1555822023108264393_n.jpg?stp=dst-jpg_p843x403&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFdwPFIHIdquoEiF90JxkBmeZXjXBTsMtB5leNcFOwy0KHzW-__Kfi5Lq5q44H3n4O9zSkJAcv60M08ylC6t1bG&_nc_ohc=m31RdOdx1aEAX_VD1cR&tn=TzUkFVNKxc6yKZVI&_nc_ht=scontent.fceb1-3.fna&oh=00_AT8YOKcDTjtnZG1e1A9m3F2IVjw6nvjsZz-Y9XaDPIdvDA&oe=629262A9"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/278844790_7814280891930297_202030546632956150_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF4CXuMO1SjrWi1D29VXgZb-0jSmcyi5UH7SNKZzKLlQai7eeTCx95T1ftydlH9VbZt5TgvVMYjvp1zYmdfE0dk&_nc_ohc=7_KfmLcqVHIAX_yg2Yx&_nc_ht=scontent.fceb1-3.fna&oh=00_AT8rNCDZpVTuRefxXSqfySrAEwnGj2BF_FzpFFK9-evmuw&oe=6293B8EE"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/278331152_2052034301635027_6348793879436556402_n.jpg?stp=dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeFBKufqjopvqKEtajOxuK_xHTU1a9Iit70dNTVr0iK3vRTtWLff0v0OVEO1ylrIV0W_U9whP2azTJOoe2fRXcFE&_nc_ohc=X-49hPm6wSEAX9g4a-5&_nc_oc=AQmLa92vKeMwB7oJRPof8HLmnBj_mBA4I_te56Y8nmD1RYz-9HV-OfcZteBcJIgB5DGMZNf8KMQ8ZYBChDVC7gfl&tn=TzUkFVNKxc6yKZVI&_nc_ht=scontent.fceb1-3.fna&oh=00_AT8b7tei_RvYtPWhOBNvYifHbdh94I1DsU65DpqanM23vA&oe=62930F18"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
