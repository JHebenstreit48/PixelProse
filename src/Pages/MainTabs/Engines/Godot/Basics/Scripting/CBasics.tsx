import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CBasics = () => {
  const markdownFilePath = 'Engines/Godot/Basics/Scripting/CBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="C# Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CBasics;
