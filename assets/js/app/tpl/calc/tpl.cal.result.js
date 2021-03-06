define(function(require) {

    require('jquery.tmpl');
    $.template('tpl.basic.input.info', ['<h5>기본 입력 정보</h5>',
        '<div class="col-sm-4">',
        '  <table class="table table-bordered">',
        '    <thead>',
        '      <tr>',
        '        <th>구분</th>',
        '        <th>기본정보</th>',
        '      </tr>',
        '    </thead>',
        '    <tbody>',
        '      <tr>',
        '        <th>품명</th>',
        '        <td>${product_name}</td>',
        '      </tr>',
        '      <tr>',
        '        <th>규격</th>',
        '        <td>${paper_cover.book_standard}</td>',
        '      </tr>',
        '      <tr>',
        '        <th>수량</th>',
        '        <td>${paper_cover.book_quantity}부</td>',
        '      </tr>',
        '      <tr>',
        '        <th>제본</th>',
        '        <td>중철</td>',
        '      </tr>',
        '      <tr>',
        '        <th>접지</th>',
        '        <td>x</td>',
        '      </tr>',
        '    </tbody>',
        '  </table>',
        '</div>',
        '<div class="col-sm-8">',
        '  <table class="table table-bordered">',
        '    <thead>',
        '      <tr>',
        '        <th>구분</th>',
        '        <th>표지</th>',
        '        <th>내지</th>',
        '        <th>엽서</th>',
        '      </tr>',
        '    </thead>',
        '    <tbody>',
        '      <tr>',
        '        <th>페이지</th>',
        '        <td>${paper_cover.book_page}p</td>',
        '        <td>${paper_inside.book_page}p</td>',
        '        <td>${postcard.book_page}p</td>',
        '      </tr>',
        '      <tr>',
        '        <th>작업</th>',
        '        <td>${paper_cover.paper_job.name}</td>',
        '        <td>${paper_inside.paper_job.name}</td>',
        '        <td>${postcard.paper_job.name}</td>',
        '      </tr>',
        '      <tr>',
        '        <th>인쇄판</th>',
        '        <td>${paper_cover.filmNum}판</td>',
        '        <td>${paper_inside.filmNum}판</td>',
        '        <td>${postcard.filmNum}판</td>',
        '      </tr>',
        '      <tr>',
        '        <th>코팅</th>',
        '        <td>${paper_cover.coating_nonshine.name}</td>',
        '        <td>${paper_inside.coating_nonshine.name}</td>',
        '        <td>${postcard.coating_nonshine.name}</td>',
        '      </tr>',
        '      <tr>',
        '        <th>톰슨</th>',
        '        <td>${paper_cover.book_tomson.name}</td>',
        '        <td>${paper_inside.book_tomson.name}</td>',
        '        <td>${postcard.book_tomson.name}</td>',
        '      </tr>',
        '    </tbody>',
        '  </table>',
        '</div>'
    ].join(''));

$.template('tpl.paper.price.info', 
        ['<h5>용지대</h5>',
        '<div class="col-sm-12">',
        '  <table class="table table-bordered">',
        '    <thead>',
        '      <tr>',
        '        <th>구분</th>',
        '        <th>품명</th>',
        '        <th>명세</th>',
        '        <th>수량</th>',
        '        <th>도수</th>',
        '        <th>단가</th>',
        '        <th>금액</th>',
        '        <th>비고</th>',
        '      </tr>',
        '    </thead>',
        '    <tbody>',
        '      <tr>',
        '        <th>표지</th>',
        '        <td>${paper_cover.paper_kind.name}</td>',
        '        <td>${paper_cover.paper_job.name}</td>',
        '        <td>1.4</td>',
        '        <td>R</td>',
        '        <td>${paper_cover.paper_kind.previousPrice}</td>',
        '        <td>66,948</td>',
        '        <td>${paper_cover.paper_kind.discountRate*100}%</td>',
        '      </tr>',
        '      <tr>',
        '        <th>내지</th>',
        '        <td>${paper_inside.paper_kind.name}</td>',
        '        <td>${paper_inside.paper_job.name}</td>',
        '        <td>1.4</td>',
        '        <td>R</td>',
        '        <td>${paper_inside.paper_kind.previousPrice}</td>',
        '        <td>66,948</td>',
        '        <td>${paper_inside.paper_kind.discountRate*100}%</td>',
        '      </tr>',
        '      <tr>',
        '        <th>엽서</th>',
        '        <td>${postcard.paper_kind.name}</td>',
        '        <td>${postcard.paper_job.name}</td>',
        '        <td>1.4</td>',
        '        <td>R</td>',
        '        <td>${postcard.paper_kind.previousPrice}</td>',
        '        <td>66,948</td>',
        '        <td>${postcard.paper_kind.discountRate*100}%</td>',
        '      </tr>',        
        '    </tbody>',
        '  </table>',
        '</div>',
      ].join(''));

});
