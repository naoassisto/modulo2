CREATE TABLE curriculo(  
    id NOT NULL PRIMARY KEY, formacao TEXT,
    experiencia TEXT, idiomas TEXT
);

SELECT * FROM curriculo ORDER BY id LIMIT 100;

INSERT INTO curriculo (id, formacao, experiencia, idiomas)
VALUES ('teste','teste','teste','teste');

DELETE FROM curriculo WHERE id='19';
UPDATE curriculo (id, formacao, experiencia, idiomas)
VALUES ('teste','teste','teste','teste');

INSERT INTO curriculo (id, formacao, experiencia, formacao) 
VALUES (22, '${req.body.idiomas}','${req.body.experiencia}','${req.body.nomeformação}')

output = ''; 
$search = mysqli_query($link,"SELECT * FROM curriculo ORDER BY id;"); 
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
echo $output;