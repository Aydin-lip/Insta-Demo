import { Accordion } from "react-bootstrap";

const AppsAndWebsites = () => {
  document.title = "Apps and Websites • Instagram";
  return (
    <>
      <div className="container p-5">
        <h3 className="fw-light">Apps and Websites</h3>
        <div className="mt-5">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Active</Accordion.Header>
              <Accordion.Body>
                <p>
                  These are apps and websites you've connected to your Instagram
                  account. They can access non-public information that you
                  choose to share with them.
                </p>
                <p className="text-muted">
                  You have not authorized any applications to access your
                  Instagram account.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Expired</Accordion.Header>
              <Accordion.Body>
                <p>
                  These are apps and websites you've connected to your Instagram
                  account that you may not have used in the last 90 days.
                  They're no longer able to access your non-public information,
                  but may still have the information you shared while they were
                  active. "Non-public" means information that an app can only
                  access if you choose to share it when you log in with your
                  Instagram account (like your email address).
                </p>
                <p className="text-muted">
                  You have no expired applications that had access to your
                  Instagram account.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Removed</Accordion.Header>
              <Accordion.Body>
                <p>
                  These are apps and websites that are no longer connected to
                  your Instagram account. They can't access your non-public
                  information anymore, but may still have the information you
                  shared while they were active. "Non-public" means information
                  that an app can only access if you choose to share it when you
                  log in with your Instagram account (like your email address).
                  You can ask an app to delete your information. To do it,
                  review their Privacy Policy for details and contact
                  information. If you contact an app, they may need your User
                  ID.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AppsAndWebsites;
