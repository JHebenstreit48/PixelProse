import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
