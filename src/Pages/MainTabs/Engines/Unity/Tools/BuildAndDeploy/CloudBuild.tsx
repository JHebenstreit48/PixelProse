import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CloudBuild = () => {
  const markdownFilePath = 'Engines/Unity/Tools/BuildAndDeploy/CloudBuild';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud Build" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CloudBuild;
