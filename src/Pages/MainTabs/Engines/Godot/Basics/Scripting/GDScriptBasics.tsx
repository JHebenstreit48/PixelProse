import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GDScriptBasics = () => {
  const markdownFilePath = 'Engines/Godot/Basics/Scripting/GDScriptBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="GDScript Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GDScriptBasics;
