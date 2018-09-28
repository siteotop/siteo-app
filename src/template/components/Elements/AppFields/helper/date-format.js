import format from 'date-fns/format';

// use only YEAR MONTH DAY
const unFormatDate= function(stringDate, stringFormat, mask) {
      // 14/05/1987
      // DD/MM/YYYY
      // 11/11/1111
      const mydate =   new Date(
          getTokenFromDate( 'Y',  stringFormat, stringDate  ),
          getTokenFromDate( 'M',  stringFormat, stringDate  ) - 1,
          getTokenFromDate( 'D',  stringFormat, stringDate  ),

      ) ;

      //  console.log(mydate);
        return mydate;

  };

const getTokenFromDate = function(token, stringFormat, stringDate){

    const res = stringFormat.match(new RegExp(token+'+', 'g')  );
    const m_format = res.join();
    const m_count  =  m_format.length;
    const start_pos =  stringFormat.search(m_format);
    const result =  parseInt( stringDate.substring(start_pos,start_pos+m_count));
      console.log(token+':'+result);
      return result;
  };


 const unFormat = function (value, format_string, default_format) {
    return format( unFormatDate(value, format_string),  default_format );
 }

export {format, unFormat}
