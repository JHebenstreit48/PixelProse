import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ChannelsAndSelectors = () => {
  const markdownFilePath = 'Languages/Java/Advanced/NIOAndBinary/ChannelsAndSelectors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Channels & Selectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChannelsAndSelectors;
