import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
