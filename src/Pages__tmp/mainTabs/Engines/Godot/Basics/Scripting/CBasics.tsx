import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const CBasics = () => {
  const markdownFilePath = 'Engines/Godot/Basics/Scripting/CBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="C# Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CBasics;
