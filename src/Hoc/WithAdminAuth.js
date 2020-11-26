import useAdminAuth  from './../CustomHooks/UseAdminAuth';

const WithAdminAuth = props => useAdminAuth(props) && props.children;

export default WithAdminAuth;
