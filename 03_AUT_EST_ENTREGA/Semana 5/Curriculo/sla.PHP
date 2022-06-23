<!-- $output = ''; 
$search = mysqli_query ($link,"SELECT * FROM curriculo ORDER BY id;"); 
while($data = mysqli_fetch_array($search)) { 
    $output .= '
    <tr>
      <td>'.$data['formacao'].'</td>
      <td>'.$data['experiencia'].'</td>
      <td>'.$data['idioma'].'</td>
      <td>
        <a class="btn btn-primary" role="button"></a>
      </td>
    </tr>
    '; 
}
echo $output; -->