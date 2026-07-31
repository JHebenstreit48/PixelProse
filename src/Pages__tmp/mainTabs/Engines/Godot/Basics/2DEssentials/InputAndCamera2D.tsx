import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const InputAndCamera2D = () => {
  const markdownFilePath = 'Engines/Godot/Basics/2DEssentials/InputAndCamera2D';

  return (
    <>
      <PageLayout>
        <PageTitle title="Input & Camera2D" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InputAndCamera2D;
