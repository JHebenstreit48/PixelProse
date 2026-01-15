import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DedicatedServers = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Networking/DedicatedServers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Dedicated Servers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DedicatedServers;
