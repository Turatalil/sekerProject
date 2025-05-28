import styled from 'styled-components';

const UserProfile = () => {
  return (
    <Container>
      <UserHeader>
        <h3>User</h3>
      </UserHeader>
      <UserCard>
        <UserInfo>
          <p><strong>Name:</strong> Seker</p>
          <p><strong>Phone number:</strong> +996 (000) 000-000</p>
          <p><strong>Email:</strong> user@gmail.com</p>
          <p><strong>Password:</strong> ItDoorSuper</p>
        </UserInfo>
      </UserCard>
    </Container>
  );
};

export default UserProfile;

const Container = styled.div`
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  background: transparent;
`;

const UserHeader = styled.div`
  margin-bottom: 10px;
  width: 400px; 
  text-align: left;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: #333333;
    display: inline-block; 
  }

  h3::after {
    content: '';
    display: block;
    width: 50px; 
    border-bottom: 1px solid #333333; 
    margin-top: 5px;
  }
`;

const UserCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  text-align: left;

  p {
    margin: 5px 0;
    font-size: 20px;
    font-weight: 400px;
    color: #555555;
  }

  strong {
    font-weight: 500px;
    color: #333333;
  }
`;
