import Header from "../components/Header/Header.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";



function HomeLayout({ children })  {
  

    // const dispatch = useDispatch();
    // const navigate = useNavigate();

// for checking if user is logged
    // const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

// for displaying the options acc to role
    // const role = useSelector((state) => state?.auth?.role)



    return (
        <>
        {/* {isLoggedIn &&()} */}
        <Header></Header>
            <div className="flex h-screen">
              <Sidebar></Sidebar>
            </div>
        </>
    );
}

export default HomeLayout;
