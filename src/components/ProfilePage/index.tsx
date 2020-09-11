import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Fallowage, 
    EditButton,
} from './styles'; 

const ProfilePage: React.FC = () => {
  return(
      <Container>
          <Banner>
               <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>
              <h1>Lília Paula</h1>
              <h2>@liliapaula</h2>

              <p>
                  Developer at <a href="#">@google</a>
              </p>
              <ul>
                  <li>
                      <LocationIcon />
                      Fortaleza - CE
                  </li> 
                  <li>
                      <CakeIcon />
                      Nascimento em 01 janeiro 2000
                  </li>                 
              </ul>
              <Fallowage>
                  <span>
                      seguindo <strong>01</strong>
                  </span>
                  <span>
                      <strong>01 </strong>seguidor
                  </span>
              </Fallowage>
          </ProfileData>

          <Feed />
      </Container>
  )
}

export default ProfilePage;