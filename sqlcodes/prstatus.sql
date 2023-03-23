select

pr.requisition_no as PR_NO,
pr.requisition_date as Req_Date ,
pr.requisitioner_code as Requsitioner ,
pr.ordered_for as Ordered_for,
pr.state as Status,
pr.po_number as Po_no

from IFS_PR_STATUS_VIEW pr

where pr.site = 'GBMSA'