import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const DedicatedServers = () => {
  const markdownFilePath = 'Engines/Cry/Advanced/Networking/DedicatedServers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dedicated Servers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DedicatedServers;
