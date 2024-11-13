import * as React from "react";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar"

import "./style.css";

const DirectoryPage = () => {
  return (
    <Layout title="Directory | Community @ Spark">
      <div id="header-section" className="content-section">
        <h1>
          community at <span className="outline-text">spark</span>
        </h1>
        <br />
        <Navbar />
      </div>
      <div className="content-section">
        <h2>Spring 2024</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Haley Kang, Paul Loh
            <br />
            <span className="bold">VP Internal</span>: Andre van de Ven
            <br />
            <span className="bold">VP External</span>: Grace Thanglerdsumpan
            <br />
            <span className="bold">VP Red</span>: Jasper Zhu
            <br />
            <span className="bold">VP Blue</span>: Nick Cirillo
            <br />
            <span className="bold">Social Chair</span>: Luna Chen
            <br />
            <span className="bold">Marketing and Design Chair</span>: Joyce Chen
            <br />
            <br />
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="red-title">Red</h3>
          <span className="bold">Project Leads</span>:<br />
          Jasmine Wang, 
          James Baker, 
          Eric Lee, 
          Luke Tong
            <br />
            <br />
          <p>
            <span className="bold">Developers</span>:<br />
            Fiona Jiang, 
            Joseph Dattilo, 
            Charles Jin, 
            Megan Yang, 
            Meiling Mathur, 
            Michael Li, 
            August Fu, 
            Emily Kang, 
            Angie Cao, 
            Johnny Jeong, 
            Cindy Wei, 
            Lori Brown, 
            Sumanth Kadiyala
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Yue Zhao, 
            Ani Nguyen Le, 
            Namita Sajai
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="blue-title">Blue</h3>
          <p>
          <span className="bold">Instructors</span>:<br />
            Barbara Seyram Nhyira Agbotey, 
            Chelsea Cheng
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Gabriel Thiessen, 
            Katherine Yue, 
            Raphael Martinez, 
            Xue Jiang, 
            David Lee, Luna Chen
           <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Fiona Herzog, 
            Nond Phokasub, Mary Liu, Raelynn Cui

          </p>
        </div>
      </div>
      <div className="content-section">
        <h2>Fall 2023</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Na Kyung Lee, Haley Kang
            <br />
            <span className="bold">VP Internal</span>: Kashyap Chaturvedula
            <br />
            <span className="bold">VP External</span>: Grace Thanglerdsumpan
            <br />
            <span className="bold">VP Red</span>: Paul Loh
            <br />
            <span className="bold">VP Blue</span>: Matthew Cho, Nick Cirillo
            <br />
            <span className="bold">Social Chairs</span>: Andre van de Ven
            <br />
            <span className="bold">Design Chair</span>: Joyce Yoon
            <br />
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="red-title">Red</h3>
          <p>
            <span className="bold">Developers</span>:<br />
            Alyssa Nie, 
            Andrew Jiang, 
            Angie Cao, 
            Anna Xia, 
            August Fu, 
            Cindy Wei, 
            Dhatri Medarametla, 
            Emily Kang, 
            James Baker, 
            Jasper Zhu, 
            Johnny Jeong, 
            Marcel Kida, 
            Ryan De Lopez, 
            Sanya Shetty, 
            Sydney Simon
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            April Zhang, 
            Barbara Seyram Nhyira Agbotey, 
            Isabelle Gu, 
            Jason Saito, 
            Tobias Nguyen, 
            Chelsea Cheng, 
            Christiana Guan, 
            Claire Zhang, 
            Jasmine Wang, 
            Joyce Chen, 
            Joyce He, 
            Sonia Tam, 
            Nwai Alfa
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="blue-title">Blue</h3>
          <p>
            <span className="bold">Developers</span>:<br />
            Defne Tim, 
            Gabriel Thiessen, 
            Katherine Yue, 
            Luna Chen, David Lee, Xue Jiang, 
            Raphael Martinez
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Fiona Herzog, 
            Nond Phokasub, Mary Liu, Raelynn Cui
          </p>
        </div>
      </div>
      <div className="content-section">
        <h2>Spring 2023</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Andrew Jiang, Jimmy Ren
            <br />
            <span className="bold">VP Internal</span>: Anna Xia
            <br />
            <span className="bold">VP External</span>: Janice Kim
            <br />
            <span className="bold">VP Red</span>: Subin Kim
            <br />
            <span className="bold">VP Blue</span>: Na Kyung Lee
            <br />
            <span className="bold">Social Chair</span>: Haley Kang
            <br />
            <span className="bold">Communications Chair</span>: Claire Zhang
            <br />
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="red-title">Red</h3>
          <p>
            <span className="bold">Project Leads</span>:<br />
            Elyssa Chou, Marcel Kida, Paul Loh
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            August Fu, Cindy Wei, Clyve Gassant, Dhatri Medarametla, Elizabeth Chou,Hyun Ki Cho, Kashyap Chaturvedula, Marcel Kida, Paul Loh, Praneel Chakraborty, Ryan De Lopez, Yuhan Liu, Haley Kang
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Grace Thanglerdsumpan, Jasper Zhu, Joyce Yoon, Michelle Gong, Christiana Guan, Joyce He
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="blue-title">Blue</h3>
          <p>
            <span className="bold">Instructors</span>:<br />
            Alyssa Nie, Chelsea Cheng, Eric Wang, Jimmy Ren, Anna Xia, Christiana Guan, Joyce He, Janice Kim
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Andre van de Ven, Emily Kang, James Baker, Kai Wang, Nick Cirillo, Nicole Zhao, Razaq Aribidesi, Sanya Shetty, Sydney Simon, Zain Khan
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            April Zhang, Isabelle Gu, Jason Saito, Maliha Rahman, Nwai Alfa, Tobias Nguyen, Yanjie Zhang, Barbara Seyram Nhyira Agbotey 
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Fall 2022</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Andrew Jiang, Jimmy Ren
            <br />
            <span className="bold">VP Internal</span>: Ethan Zhao
            <br />
            <span className="bold">VP External</span>: Janice Kim
            <br />
            <span className="bold">VP Red</span>: Subin Kim
            <br />
            <span className="bold">VP Blue</span>: Na Kyung Lee
            <br />
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="red-title">Red</h3>
          <p>
            <span className="bold">Project Leads</span>:<br />
            Anna Baringer, Ethan Zhao, Yuhan Liu
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Alyssa Nie, Anna Baringer, Arush Mehrotra, Clyve Gassant, Dhatri Medarametla, Eric Wang, Marcel Kida, Paul Loh, Rain Yan, Sanya Shetty, Sumanth Kadiyala
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Allison Zhang, Chelsea Cheng, Christiana Guan, Claire Zhang, Joyce He, Marcel Kida, Mykaela Salvacion
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="blue-title">Blue</h3>
          <p>
            <span className="bold">Instructors</span>:<br />
            Anna Xia, Chelsea Cheng, Christiana Guan, Joyce He, Hyun Ki Cho, Paul Loh, Yuhan Liu
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Allison Zhang, Zain Khan
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Dhatri Medarametla, Yanjie Zhang
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Spring 2022</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Christina Lu, Grace Jiang
            <br />
            <span className="bold">VP Internal</span>: Ethan Zhao
            <br />
            <span className="bold">VP External</span>: Janice Kim
            <br />
            <span className="bold">VP Red</span>: Andrew Jiang
            <br />
            <span className="bold">VP Blue</span>: Yuhan Liu
            <br />
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="red-title">Red</h3>
          <p>
            <span className="bold">Project Leads</span>:<br />
            Anna Baringer, Chelsea Cheng, Marcel Kida, Subin Kim, Yuhan Liu
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Acelyn Choi, Anna Xia, Arush Mehrotra, Claire Zhang, Eric Wang, Hyun Ki Cho, James Ciardullo, Paul Loh, Sumanth Kadiyala
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Chelsea Cheng, Claire Zhang, Eric Dai, Joyce He, Marcel Kida, Olivia Zha, Paul Loh
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="blue-title">Blue</h3>
          <p>
            <span className="bold">Instructors</span>:<br />
            Jimmy Ren, Joyce He, Matthew Dong, Olivia Zha
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Alyssa Nie, Clyve Gassant, Dhatri Medarametla, Na Kyung Lee, Sanya Shetty, Yanjie Zhang, Zain Khan
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Allison Zhang, Christiana Guan, Emily Guo, Mykaela Salvacion, Rain Yan
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Fall 2021</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Grace Jiang, Olivia Zha
            <br />
            <span className="bold">VP Internal</span>: Jimmy Ren
            <br />
            <span className="bold">VP External</span>: Janice Kim
            <br />
            <span className="bold">VP Red</span>: Akshay Sharma
            <br />
            <span className="bold">VP Blue</span>: Elyssa Chou
            <br />
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="red-title">Red</h3>
          <p>
            <span className="bold">Project Leads</span>:<br />
            Acelyn Choi, Anna Xia, Janice Kim, Marcel Kida, Subin Kim
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Alexander Zheng, Andrew Jiang, David Zhang, Jiacheng Li, Kevin Zhou,
            Marcel Kida
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Chelsea Cheng, Isabel An, Janice Kim, Joyce He, Marcel Kida
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob">
          <h3 className="blue-title">Blue</h3>
          <p>
            <span className="bold">Instructors</span>:<br />
            Akshay Sharma, Christina Lu, Elyssa Chou, Grace Jiang, Janice Kim
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Anna Baringer, Arush Mehrotra, Arushi Srivastava, Claire Zhang,
            Elaine Fan, Ethan Zhao, Homer Wang, James Ciardullo, Will Liang,
            Rain Yan, Yuhan Liu
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Matthew Dong, Paul Kwok Eu Loh, Seiyon Lee
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Spring 2021</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Grace Jiang, Olivia Zha
            <br />
            <span className="bold">VP Internal</span>: Christina Lu
            <br />
            <span className="bold">Tech Leads</span>: Akshay Sharma, Joochan
            Shin
            <br />
            <span className="bold">Design Leads</span>: Elyssa Chou, Janice Kim
            <br />
            <span className="bold">Social Chair</span>: Olivia Cheng
          </p>
        </div>

        <div className="spacer" />

        <div className="directory-blob-2">
          <h3 className="blue-title">General Members</h3>
          <p>
            <span className="bold">Developers</span>:<br />
            Aarushi Singh, Acelyn Choi, Aditya Gupta, Ahmed Laban, Andrew Zhang,
            Arushi Srivastava, Aryan Nagariya, Brandon Adiele, Bryan Denq, Charles Cheng,
            David Zhang, Egret Jin, Elaine Fan, Helena Zhang, Janna Goliff, Jimmy Ren,
            Leon Hertzberg, Logan Cho, Lindsay Smith, Linda Lu, Maggie Yu,
            Norman Chen, Subin Kim, Tinatin Kokoshvili, Vishaal Kumar, Wendy Wu,
            Shelly Wu
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Caroline Chin, Christy Qiu, Connie Lin, Isabel An, Julia Deng,
            Juliana Lu, Karen Zheng, Kristine Lam, Vivienne Chen
          </p>
        </div>
      </div>

      <div className="content-section">
        <h2>Alumni</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">2022</h3>
          <p>
            Christina Lu, Emily Guo, Eric Dai, Grace Jiang, Olivia Zha
            <br />
          </p>
        </div>
      </div>

      <div style={{ height: "30px" }} />
    </Layout>
  );
};

export default DirectoryPage;
