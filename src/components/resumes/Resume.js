import React, { useState } from "react";
import { ResumesFiles } from "./Data";
import { Input } from "semantic-ui-react";
import styles from "./Resume.module.css";
const tagOptions = [
  {
    id: 1,
    key: "ALL",
  },
  {
    id: 2,
    key: "AIACTR",
  },
  {
    id: 3,
    key: "NSUT",
  },
  {
    id: 4,
    key: "DTU",
  },
  {
    id: 5,
    key: "VIT",
  },
];

const Resume = () => {
  const [searchClg, setSearchClg] = useState("");
  const [searchName, setSearchName] = useState("");
  return (
    <>
      <div className={styles.main_wrapper}>
        <section className="d-flex justify-content-around pt-5">
          <div className="input-group border-0 w-25 mb-3 ">
            <select
              onChange={(e) => setSearchClg(e.target.value)}
              className="form-select"
              id="inputGroupSelect01"
            >
              {tagOptions.map((data) => (
                <option key={data.id}>{data.key}</option>
              ))}
            </select>
          </div>
          <div>
            <Input
              icon="users"
              iconPosition="left"
              placeholder="Search users..."
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
        </section>

        <div className="row  row-cols-1 m-md-5 m-4  ">
          <div className="row d-flex gap-5 w-100 m-2 d-flex justify-content-center align-items-center    ">
            {ResumesFiles.filter((val) => {
              if (searchName === " ") {
                return val;
              } else if (
                val.clg.toLowerCase().includes(searchClg.toLowerCase()) &&
                (val.company.toLowerCase().includes(searchName.toLowerCase()) ||
                  val.Name.toLowerCase().includes(searchName.toLowerCase()))
              ) {
                return val;
              } else if (searchClg == "ALL") return val;
            }).map((client) => (
              <div
                key={client.id}
                className="card "
                style={{ width: "18rem", backgroundColor: "#e0e1e2" }}
              >
                <div className={styles.img_container}>
                  <div className={styles.img_wrapper}>{client.image}</div>
                </div>
                <div
                  className="card-body"
                  style={{ backgroundColor: "#e0e1e2" }}
                >
                  <h5 className={styles.Name}>{client.Name}</h5>
                  <p className={styles.Clg_name}>{client.clg}</p>
                  <p className={styles.company}>{client.company}</p>

                  <a className={styles.btn}>{client.file}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
