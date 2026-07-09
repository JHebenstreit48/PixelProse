import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HeadlessAndServer = () => {
  const markdownFilePath = 'Engines/Godot/Tools/CLIAndHeadless/HeadlessAndServer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Headless & Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeadlessAndServer;
