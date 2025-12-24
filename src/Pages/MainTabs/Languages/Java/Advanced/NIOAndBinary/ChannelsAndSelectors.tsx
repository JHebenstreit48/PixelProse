import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ChannelsAndSelectors = () => {
  const markdownFilePath = 'Languages/Java/Advanced/NIOAndBinary/ChannelsAndSelectors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Channels & Selectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ChannelsAndSelectors;
