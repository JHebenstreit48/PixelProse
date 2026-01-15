import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GodotCLIBasics = () => {
  const markdownFilePath = 'Engines/Godot/Tools/CLIAndHeadless/GodotCLIBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="godot CLI Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GodotCLIBasics;
