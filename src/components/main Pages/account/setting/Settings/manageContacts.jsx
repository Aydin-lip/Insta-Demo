const ManageContacts = () => {
  document.title = "Manage Contacts • Instagram";
  return (
    <>
      <div className="container ps-5">
        <span className="fs-4">Manage Contacts</span>
        <p className="mt-3 lineHeight-18">
          The people listed here are contacts you've uploaded to Instagram. To
          remove your synced contacts, tap Delete All. Your contacts will be
          re-uploaded the next time Instagram syncs your contacts unless you go
          to your device settings and turn off access to contacts.
        </p>
        <p className="lineHeght-18">
          Only you can see your contacts, but Instagram uses the info you've
          uploaded about your contacts to make friend suggestions for you and
          others and to provide a better experience for everyone.
        </p>
        <div className="mt-5 border-bottom d-flex py-2">
          <span className="fw-500">0 Synced Contacts</span>
          <span className="fw-500 fs-09 text-primary cursor ms-auto">
            Delete All
          </span>
        </div>
      </div>
    </>
  );
};

export default ManageContacts;
