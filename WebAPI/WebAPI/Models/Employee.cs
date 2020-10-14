using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Web;

namespace WebAPI.Models
{
    public class Employee
    {
        public long EmployeeID { get; set; }
        public string EmployeeName { get; set; }
        public string MailID { get; set; }
        public string Department { get; set; }
        public DateTime? DOJ { get; set; }
    }
}