import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Filter } from "../../components/Filter/Filter";
import { ContactList } from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import { Loader } from "../../components/Loader/Loader";

import { useDispatch ,useSelector } from "react-redux";
import { getError, getIsLoading } from "../../redux/contacts/contactsSelector";

import { Heading } from '@chakra-ui/react';


const ContactsPage = () =>{
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);



  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        color: "#010101",
      }}
    >

      <Heading mt="50px" textAlign="center">
       Phonebook
      </Heading>
      <ContactForm />
  
      <h2> Contacts</h2>
      <Filter />
           {isLoading && !error && <Loader/>}
      <ContactList />
   
    </div>
  );
}

export default ContactsPage;