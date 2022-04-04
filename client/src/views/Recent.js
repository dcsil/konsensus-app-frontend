/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from 'reactstrap';

// core components
import Header from 'components/Headers/Header.js';
import FileRow from 'components/Files/FileRow.js';

// test 
const Recent = () => {
  const dummyfiledata = [
    {filename: 'FileName.pdf', filesize: '123.45 Gb', status: 'Warning', collaborators: ['Ryan Tompson', 'Romina Hadid', 'Alexander Smith', 'Jessica Doe'], progress: '60%', timestamp: 'Apr 01 2022 06:42:57'}, 
    {filename: 'file2.docx', filesize: '43.45 Gb', status: 'Completed', collaborators: ['Felisha Keys','Draco Rico'], progress: '100%', timestamp: 'Apr 01 2022 04:10:41'}, 
    {filename: 'file3.ppt', filesize: '2.45 Gb', status: 'On Schedule', collaborators: ['Bella Hadid', 'Will Smith', 'Chris Rock'], progress: '80%', timestamp: 'Mar 27 2022 12:38:01'},
    {filename: 'file4.xls', filesize: '3.45 Gb', status: 'Completed', collaborators: ['Britney Spierres'], progress: '100%', timestamp: 'Mar 15 2022 14:25:13'},
    {filename: 'file5.txt', filesize: '123.45 Mb', status: 'Completed', collaborators: ['Bob Flenderson'], progress: '100%', timestamp: 'Feb 04 2022 08:42:45'}] 
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Files</h3>
              </CardHeader>
              <Table
                className="align-items-center table-flush"
                responsive
              >                
              {/* </File> */}
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Size</th>
                    <th scope="col">Status</th>
                    <th scope="col">Collaborators</th>
                    <th scope="col">Completion</th>
                    <th scope="col">Last Access</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                { dummyfiledata.map(filerow => (
                  <FileRow fileInfo={ filerow }>
                  </FileRow>
                )) } 
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Recent;
