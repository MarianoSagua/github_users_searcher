import { CardMedia, Grid, Paper, Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import DomainIcon from '@mui/icons-material/Domain';

const CardUser = (props) => {
  const { actualUser } = props;
  const { avatar_url, name, login, created_at, bio, public_repos, followers, following, location, twitter_username, blog, company } = actualUser;

  return (
    <Grid container sx={{marginTop: "40px", placeContent: "center"}}>
        <Grid item xs={12} md={3}>
          <CardMedia component="img" image={avatar_url} alt='GitHub Profile Photo' sx={{borderRadius: "50%"}}/>
        </Grid>

        <Grid id="cardInfo" item xs={12} md={7} sx={{marginLeft: "35px"}}>
          <Fragment>
            <Stack id="cardInfoTitles" sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
              <Typography sx={{fontSize: "35px"}}>{name}</Typography>
              <Typography>{created_at}</Typography>
            </Stack>

            <Typography id="cardInfoLogin" sx={{marginBottom: "10px", fontSize: "14px"}}>@{login}</Typography>
          </Fragment>

          <Fragment>
            <Stack id="cardInfoDescription">
              {bio !== null ?
                <Typography>{bio}</Typography>
                :
                <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus porro nesciunt molestias, unde ipsum eos voluptatem corrupti a iusto dolorem.</Typography>
              }
            </Stack>

            <Paper elevation={3} sx={{padding: "20px", marginTop: "20px"}}>
              <Stack id="cardInfoPaper" sx={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <Stack sx={{margin: "10px"}}>
                  <Typography sx={{fontSize: "20px", textAlign: "center", fontWeight: "800"}}>{public_repos}</Typography>
                  <Typography sx={{fontSize: "20px"}}>Repos</Typography>
                </Stack>

                <Stack sx={{margin: "10px"}}>
                  <Typography sx={{fontSize: "20px", textAlign: "center", fontWeight: "800"}}>{followers}</Typography>
                  <Typography sx={{fontSize: "20px"}}>Followers</Typography>
                </Stack>

                <Stack sx={{margin: "10px"}}>
                  <Typography sx={{fontSize: "20px", textAlign: "center", fontWeight: "800"}}>{following}</Typography>
                  <Typography sx={{fontSize: "20px"}}>Following</Typography>
                </Stack>
              </Stack>
            </Paper>
          </Fragment>

          <Fragment>
            <Grid id="cardInfoData" container sx={{marginTop: "20px"}}>
              <Grid item xs={12} sm={5}>
                <Stack>
                  {location !== null ?
                    <Typography sx={{marginBottom: "15px", display:"flex", alignItems: "center"}}>
                      <LocationOnIcon sx={{marginRight: "15px"}}/>
                      {location}
                    </Typography>
                    :
                    <Typography sx={{marginBottom: "15px", display:"flex", alignItems: "center"}}>
                      <LocationOnIcon sx={{marginRight: "15px"}}/>
                      Not Available
                    </Typography>
                  }
                  
                  {twitter_username !== null ?
                    <Typography sx={{marginBottom: "15px", display:"flex", alignItems: "center"}}>
                      <TwitterIcon sx={{marginRight: "15px"}}/>
                      <a target='_blank' href={twitter_username}>{twitter_username}</a>
                    </Typography>
                    :
                    <Typography sx={{marginBottom: "15px", display:"flex", alignItems: "center"}}>
                      <TwitterIcon sx={{marginRight: "15px"}}/>
                      Not Available
                    </Typography>
                  }
                </Stack>
              </Grid>

              <Grid item xs={12} sm={5}>
                <Stack>
                  {blog !== null ?
                    <Typography sx={{marginBottom: "15px", display:"flex", alignItems: "center"}}>
                      <LanguageIcon sx={{marginRight: "15px"}}/> 
                      <a target='_blank' href={blog}>{blog}</a>
                    </Typography>
                    :
                    <Typography sx={{marginBottom: "15px", display:"flex", alignItems: "center"}}>
                      <LanguageIcon sx={{marginRight: "15px"}}/>
                      Not Available
                    </Typography>
                  }

                  {company !== null ?
                    <Typography sx={{marginBottom: "15px", display:"flex", alignItems: "center"}}>
                      <DomainIcon sx={{marginRight: "15px"}}/>
                      {company}
                    </Typography>
                    :
                    <Typography sx={{marginBottom: "15px", display:"flex", alignItems: "center"}}>
                      <DomainIcon sx={{marginRight: "15px"}}/>
                      Not Available
                    </Typography>
                  }
                </Stack>
              </Grid>
            </Grid>
          </Fragment>
        </Grid>
    </Grid>
  )
}

export default CardUser


