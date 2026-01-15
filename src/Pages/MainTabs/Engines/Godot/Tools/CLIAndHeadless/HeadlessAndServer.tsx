import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HeadlessAndServer = () => {
  const markdownFilePath = 'Engines/Godot/Tools/CLIAndHeadless/HeadlessAndServer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Headless & Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeadlessAndServer;
