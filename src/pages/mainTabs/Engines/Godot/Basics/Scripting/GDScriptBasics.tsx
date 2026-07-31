import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
