import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
