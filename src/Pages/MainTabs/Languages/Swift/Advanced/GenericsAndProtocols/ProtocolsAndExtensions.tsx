import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProtocolsAndExtensions = () => {
  const markdownFilePath = 'Languages/Swift/Advanced/GenericsAndProtocols/ProtocolsAndExtensions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Protocols & Extensions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtocolsAndExtensions;
