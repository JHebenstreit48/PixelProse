import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InputAndCamera2D = () => {
  const markdownFilePath = 'Engines/Godot/Basics/2DEssentials/InputAndCamera2D';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Input & Camera2D" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InputAndCamera2D;
