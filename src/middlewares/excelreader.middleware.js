import  XLSX  from 'xlsx';


const excelReader = async (req, res, next) => {
  try {
    
    if (!req.file) {
      return res.status(400).json({ status: 'error', message: 'No file uploaded' });
    }

    // Read the Excel file from buffer
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });

    // Convert first sheet to JSON
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    req.excelData =  XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    // Proceed to the next middleware or route
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'Failed to process Excel file' });
  }
};

export {excelReader}
